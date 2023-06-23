import Link from "next/link"

function Home(params) {
  return (
    <>
      <h1>Next Js Pre-rendering</h1>
      <Link href='./users' legacyBehavior>
        <a>User</a>
      </Link>
    </>
  )
}

export default Home