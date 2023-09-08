import { Share } from "react-native";
import { useCallback } from "react";

export default function useShare(){
    const share = useCallback(content => {
        Share.share(content);
    }, []);
    return share;
}