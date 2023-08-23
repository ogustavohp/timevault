import * as SecureStore from 'expo-secure-store'
import { Text, TouchableOpacity, View } from 'react-native'
import TVLogo from '../src/assets/timeVaultLogo.svg'
import { useRouter } from 'expo-router'
import { makeRedirectUri, useAuthRequest } from 'expo-auth-session'
import { useEffect } from 'react'
import { api } from '../src/lib/api'

const discovery = {
  authorizationEndpoint: 'https://github.com/login/oauth/authorize',
  tokenEndpoint: 'https://github.com/login/oauth/access_token',
  revocationEndpoint:
    'https://github.com/settings/connections/applications/84bb6ccc217cc56be65b',
}

export default function App() {
  const router = useRouter()

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

  return (
    <View className="flex-1 items-center px-8 py-10">
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
    </View>
  )
}
