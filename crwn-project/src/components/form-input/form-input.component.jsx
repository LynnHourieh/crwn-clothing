import { FormInputLabel, Input, Group } from './form-input.styles';

const FormInput = ({ label, ...otherProps }) => {
  return (
    <Group>
    <Input {...otherProps} />
    {label && (
      <FormInputLabel shrink={otherProps.value.length}>
        {label}
      </FormInputLabel>
    )}
  </Group>
    // <div className='group'>
    //   <input className='form-input' {...otherProps} />
    //   {label && (
    //     <label
    //       className={`${
    //         otherProps.value.length ? 'shrink' : ''
    //       } form-input-label`}
    //     >
    //       {label}
    //     </label>
    //   )}
    // </div>
  );
};

export default FormInput;

// <input type="text" required onChange={changeHandler} name="displayName" value={displayName}/>