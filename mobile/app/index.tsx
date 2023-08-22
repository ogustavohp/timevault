import { StatusBar } from 'expo-status-bar'
import * as SecureStore from 'expo-secure-store'
import { ImageBackground, Text, TouchableOpacity, View } from 'react-native'
import { BaiJamjuree_700Bold } from '@expo-google-fonts/bai-jamjuree'
import blurBG from '../src/assets/bg-blur.png'
import Stripes from '../src/assets/stripes.svg'
import TVLogo from '../src/assets/timeVaultLogo.svg'
import { useRouter } from 'expo-router'
import { styled } from 'nativewind'
import { makeRedirectUri, useAuthRequest } from 'expo-auth-session'
import { useEffect } from 'react'
import { api } from '../src/lib/api'
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from '@expo-google-fonts/roboto'

const StyledStripes = styled(Stripes)

const discovery = {
  authorizationEndpoint: 'https://github.com/login/oauth/authorize',
  tokenEndpoint: 'https://github.com/login/oauth/access_token',
  revocationEndpoint:
    'https://github.com/settings/connections/applications/84bb6ccc217cc56be65b',
}

export default function App() {
  const router = useRouter()
  const [hasLoadedFonts] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
    BaiJamjuree_700Bold,
  })

  const [, response, signInWithGithub] = useAuthRequest(
    {
      clientId: '84bb6ccc217cc56be65b',
      scopes: ['identity'],
      redirectUri: makeRedirectUri({
        scheme: 'timevault',
      }),
    },
    discovery,
  )

  async function handleGithubOAuthCode(code: string) {
    const response = await api.post('register', {
      code,
    })

    const { token } = response.data

    await SecureStore.setItemAsync('token', token)

    router.push('memories')
  }

  useEffect(() => {
    // Executar o console.log abaixo para pegar a rota e colocar a rota no Authorization callback URl do github OAuth
    // console.log(
    //   makeRedirectUri({
    //     scheme: 'timevault',
    //   }),
    // )

    if (response?.type === 'success') {
      const { code } = response.params

      handleGithubOAuthCode(code)
    }
  }, [response])

  if (!hasLoadedFonts) {
    return null
  }

  return (
    <ImageBackground
      source={blurBG}
      className="relative flex-1 items-center bg-gray-900 px-8 py-10"
      imageStyle={{ position: 'absolute', left: '-100%' }}
    >
      <StyledStripes className="absolute left-2" />
      <View className="flex-1 items-center justify-center gap-6">
        <TVLogo />
        <Text className="text-center font-title text-2xl leading-tight text-gray-50">
          Sua cápsula do tempo
        </Text>
        <Text className="text-center font-body text-base leading-relaxed text-gray-100">
          Colecione momentos marcantes da sua jornada e compartilhe (se quiser)
          com o mundo!
        </Text>
        <TouchableOpacity
          activeOpacity={0.7}
          className="rounded-full bg-green-500 px-5 py-2"
          onPress={() => signInWithGithub()}
        >
          <Text className="font-alt text-sm uppercase text-black">
            Começar a cadastrar
          </Text>
        </TouchableOpacity>
      </View>
      <Text className="text-center font-body text-base leading-relaxed text-gray-200">
        Feito por @ogustavohp
      </Text>
      <StatusBar style="light" translucent />
    </ImageBackground>
  )
}
