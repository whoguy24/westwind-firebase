// Import Next Components
import { useRouter } from 'next/router'

export default function FilliesID() {

    const router = useRouter();
    const { id } = router.query;

    console.log(id)

    return (
      <>
      </>
    )
  }
