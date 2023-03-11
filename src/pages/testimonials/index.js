import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

export default function Testimonials() {

    // Redux Variables
    const dispatch = useDispatch();

    const testimonials = useSelector(store => store.testimonials);

    useEffect( () => {
      dispatch({ type: "FETCH_TESTIMONIALS" });
    }, []);

    return (
      <>
      </>
  );
};