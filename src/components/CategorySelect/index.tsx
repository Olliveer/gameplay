import React from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import { styles } from './styles';
import { categories } from '../../utils/categories';
import { Category } from '../Category/index';

type Props = {
  categorySelected: string;
  // eslint-disable-next-line no-unused-vars
  setCategory: (categoryId: string) => void;
  hasCheckBox?: boolean;
};

export function CategorySelect({
  categorySelected,
  hasCheckBox = false,
  setCategory,
}: Props) {
  return (
    <ScrollView
      horizontal
      style={styles.container}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ paddingRight: 40 }}
    >
      {categories.map((category) => (
        <Category
          key={category.id}
          title={category.title}
          icon={category.icon}
          checked={category.id === categorySelected}
          onPress={() => setCategory(category.id)}
          hasCheckBox={hasCheckBox}
        />
      ))}
    </ScrollView>
  );
}
