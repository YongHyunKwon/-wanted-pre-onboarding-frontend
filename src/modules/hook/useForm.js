const pattern = {
  email: /^[a-zA-Z0-9+-_.]+@[a-zA-Z0-9+-_.]+$/,
  password: /^[A-Za-z0-9]{8,}$/,
};

const useForm = () => {
  const checkValidation = (id, value) => {
    const reg = new RegExp(pattern[id]);

    return reg.test(value);
  };

  return { checkValidation };
};

export default useForm;
