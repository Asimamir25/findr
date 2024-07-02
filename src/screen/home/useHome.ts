import { useEffect, useState } from "react";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";
import { RootStackParamlist, Person } from "../../constant/type";
import { useAppDispatch, useAppSelector } from "../../store/hooks/hooks";
import { getMissing } from "../../store/slices/personsSlice";
import { year } from "../../utils/util";

export function UseHome() {
  const [selectedItem, setSelectedItem] = useState<Person | null>(null);
  const [modalVisible, setModalVisible] = useState(false);
  const isLoading = useAppSelector((state) => state.createMissing.isLoading);
  const [loading, setLoading] = useState(true);
  const dispatch = useAppDispatch();
  const navigation = useNavigation<StackNavigationProp<RootStackParamlist>>();
  const Data = useAppSelector((state) => state.createMissing.missing);

  useEffect(() => {
    const getPerson = async () => {
      try {
        await dispatch(getMissing());
      } catch (error) {
      } finally {
        setLoading(false);
      }
    };
    getPerson();
  }, [Data]);
  const openModal = (item: Person) => {
    setModalVisible(true);
    setSelectedItem(item);
  };
  const closeModal = () => {
    setModalVisible(false);
  };

  return {
    selectedItem,
    modalVisible,
    Data,
    isLoading,
    navigation,
    loading,
    year,
    openModal,
    closeModal,
  };
}
