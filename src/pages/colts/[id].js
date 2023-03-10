// Import Next Components
import { useRouter } from 'next/router'

export default function ColtsID() {

    const router = useRouter();
    const { id } = router.query;

    console.log(id)

    return (
      <>
      </>
    )
  }
