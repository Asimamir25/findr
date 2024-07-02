import firestore from "@react-native-firebase/firestore";

export const missingPersonDetailQuery = firestore().collection(
  "MissingPersonDetail"
);
export const reportCollectionGroup = firestore().collectionGroup("Report");
export const reportCollection = (docId: string) => {
  return firestore()
    .collection("MissingPersonDetail")
    .doc(docId)
    .collection("Report");
};
