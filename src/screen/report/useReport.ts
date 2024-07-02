import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks/hooks";
import { getMissing } from "../../store/slices/personsSlice";
import { year } from "../../utils/util";
import { Person } from "../../constant/type";

export function UseReport() {
  const [selectedItem, setSelectedItem] = useState<Person | null>(null);
  const [refreshing, setRefreshing] = React.useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [loading, setLoading] = useState(true);
  const data = useAppSelector((state) => state.createMissing.missing);

  const dispatch = useAppDispatch();
  const openModal = (item: Person) => {
    setModalVisible(true);
    setSelectedItem(item);
  };
  const closeModal = () => {
    setModalVisible(false);
  };
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

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
  }, [data]);

  return {
    selectedItem,
    refreshing,
    modalVisible,
    data,
    loading,
    openModal,
    closeModal,
    onRefresh,
    year,
  };
}
