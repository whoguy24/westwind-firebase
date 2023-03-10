// Import Next Components
import { useRouter } from 'next/router'

export default function GeldingsID() {

    const router = useRouter();
    const { id } = router.query;

    console.log(id)

    return (
      <>
      </>
    )
  }
