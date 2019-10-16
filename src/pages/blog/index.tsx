import DefaultLayout from '../../layouts/default'
import { NextPage } from 'next'
import Link from 'next/link'

type Props = {
  title: string
}

const PostLink: React.FC<Props> = props => (
  <li className="list-disc">
    <Link href={`/post?title=${props.title}`}>
      <a>{props.title}</a>
    </Link>
  </li>
)

const Page: NextPage = props => {
  return (
    <DefaultLayout>
      <ul>
        <PostLink title="Hello Next.js"></PostLink>
        <PostLink title="Lean Next.js is awesome"></PostLink>
      </ul>
    </DefaultLayout>
  )
}

export default Page
