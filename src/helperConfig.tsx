import { v4 as uuidv4 } from 'uuid';

const generateGuid = () => {
  const newGuid = uuidv4();
  return newGuid;
};

export default generateGuid ;