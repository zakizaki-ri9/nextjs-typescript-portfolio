import DefaultLayout from '../layouts/default'
import { NextPage } from 'next'

const Page: NextPage = props => {
  return (
    <DefaultLayout>
      <div className="bg-gray-200 p-4">
        <span className="block text-gray-700 text-center bg-gray-400 px-4 py-2">1</span>
        <span className="block text-gray-700 text-center bg-gray-400 px-4 py-2 mt-2">2</span>
        <span className="block text-gray-700 text-center bg-gray-400 px-4 py-2 mt-2">3</span>
      </div>
    </DefaultLayout>
  )
}

export default Page
