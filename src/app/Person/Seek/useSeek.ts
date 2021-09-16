import getServiceToken from "@src/app/core/getServiceToken";
import IPersonalInfo from "@src/app/types/IPersionalInfo";
import useSwr from "swr";

function useSeek() {
  const { data, error } = useSwr("/api/person/seek", () => {
    return [{ id: "", basic: { name: "ZanSan", age: 24 } }] as IPersonalInfo[];
  }, {});

  return {
    data,
    isLoading: !error && !data,
    isError: !!error
  }
}

export const SeekService = getServiceToken(useSeek);

export default useSeek;
