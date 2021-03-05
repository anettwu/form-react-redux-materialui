import React from 'react';
import { FormControl, TextField, Button } from '@material-ui/core';
import { useForm, Controller } from 'react-hook-form';

export default function Form() {
	const { register, handleSubmit, control } = useForm();
	const onSubmit = (data) => console.log(JSON.stringify(data));

	return (
		<>
			<form onSubmit={handleSubmit(onSubmit)}>
				<Controller
					as={TextField}
					id='1'
					label='Name'
					inputRef={register}
					name='name'
					control={control}
					defaultValue=''
				/>
				<Button type='submit' variant='outlined' color='primary'>
					Save
				</Button>
			</form>
		</>
	);
}
