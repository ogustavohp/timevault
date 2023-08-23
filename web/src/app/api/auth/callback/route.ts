import { api } from '@/lib/api'
import { NextRequest, NextResponse } from 'next/server'

const oneSecInSec = 1
const oneMinuteInSec = oneSecInSec * 60
const oneHourInSec = oneMinuteInSec * 60
const oneDayInSec = oneHourInSec * 24
const oneMonthInSec = oneDayInSec * 30

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const code = searchParams.get('code')

  const redirectTo = request.cookies.get('redirectTo')?.value

  const registerReponse = await api.post('/register', {
    code,
  })

  const { token } = registerReponse.data

  const redirectURL = redirectTo ?? new URL('/', request.url)

  return NextResponse.redirect(redirectURL, {
    headers: {
      'Set-Cookie': `token=${token}; Path=/; max-age=${oneMonthInSec};`,
    },
  })
}
