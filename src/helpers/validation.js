export const validationTransaction = ({ description, value, category }) => {
  if (category.name === 'Выберите категорию') {
    return false
  }

  if (value === '' || value === 0) {
    return false
  }

  return true
}
