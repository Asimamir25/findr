import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks/hooks";
import { getFoundPeople } from "../../store/slices/foundSlice";
import { openEmail } from "../../utils/util";

export function useNews() {
  const dispatch = useAppDispatch();
  const data = useAppSelector((state) => state.foundName.found);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getPerson = async () => {
      try {
        await dispatch(getFoundPeople());
      } catch (error) {
      } finally {
        setLoading(false);
      }
    };
    getPerson();
  }, [data]);

  const openEmailClient = (email: string) => {
    openEmail(email);
  };

  return {
    data,
    loading,
    openEmailClient,
  };
}
