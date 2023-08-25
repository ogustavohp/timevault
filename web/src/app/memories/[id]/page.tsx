import { api } from '@/lib/api'
import { cookies } from 'next/headers'
import dayjs from 'dayjs'
import ptBr from 'dayjs/locale/pt-br'
import MemoryInfo from '@/components/MemoryInfo'
import { getUser } from '@/lib/auth'

dayjs.locale(ptBr)

interface ParamsType {
  id: string
}

interface IMemory {
  id: string
  coverUrl: string
  content: string
  isPublic: string
  createdAt: string
  userId: string
}

export default async function Memory({ params }: { params: ParamsType }) {
  const token = cookies().get('token')?.value
  const user = getUser()

  const memoryResponse = await api.get(`/memories/${params.id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })

  const memoryData: IMemory = memoryResponse.data
  const userId = user.sub
  const data = dayjs(memoryData.createdAt).format('D[ de ]MMMM[, ]YYYY')

  if (!memoryData.isPublic && userId === memoryData.userId) {
    return <MemoryInfo {...memoryData} createdAt={data} />
  }
  if (memoryData.isPublic) {
    return (
      <>
        <MemoryInfo {...memoryData} createdAt={data} />
      </>
    )
  }
  return <div>Memória privada</div>
}
