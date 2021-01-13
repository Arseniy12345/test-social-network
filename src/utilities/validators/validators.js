export const required = (value) => {
  if (value) return undefined;
  return "Write";
};

export const maxLength = (count) => {
    return (value) => {
        if(value && value.length <= count) return undefined
        return "Много символов"
    }
}