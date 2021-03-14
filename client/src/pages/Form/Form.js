import React from 'react';
import {
	Grid,
	TextField,
	Button,
	FormLabel,
	FormHelperText,
} from '@material-ui/core';
import ReactSelect from 'react-select';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import schema from './schema';

export default function Form() {
	const { register, handleSubmit, control, errors } = useForm({
		resolver: yupResolver(schema),
	});

	const onSubmit = (data) => console.log(JSON.stringify(data));
	console.log(errors);

	return (
		<>
			<Grid container justify='center'>
				<form onSubmit={handleSubmit(onSubmit)}>
					<Grid item xs={12}>
						<Controller
							as={TextField}
							id='1'
							label='Name'
							inputRef={register}
							name='name'
							control={control}
							defaultValue=''
							error={Boolean(errors.name)}
						/>
						<FormHelperText>
							{errors.name && errors.name.message}
						</FormHelperText>
					</Grid>
					<Grid item xs={12}>
						<Controller
							as={TextField}
							id='1'
							label='Mobile'
							inputRef={register}
							name='mobile'
							control={control}
							defaultValue=''
							error={Boolean(errors.mobile)}
						/>
						<FormHelperText>
							{errors.mobile && errors.mobile.message}
						</FormHelperText>
					</Grid>
					<Grid item xs={12}>
						<Controller
							as={TextField}
							id='1'
							label='Password'
							inputRef={register}
							name='password'
							control={control}
							defaultValue=''
							error={Boolean(errors.password)}
						/>
						<FormHelperText>
							{errors.password && errors.password.message}
						</FormHelperText>
					</Grid>
					<Grid item xs={12}>
						<FormLabel>Your favourite music</FormLabel>
						<Controller
							as={ReactSelect}
							options={[
								{ value: 'rock', label: 'Rock' },
								{ value: 'pop', label: 'Pop' },
								{ value: 'disko', label: 'Disco' },
							]}
							name='select'
							control={control}
							inputRef={register}
							defaultValue='rock'
							value='pop'
							isClearable
							onChange={(e) => console.log('sss')}
						/>
						<FormHelperText>
							{errors.select && errors.select.message}
						</FormHelperText>
					</Grid>
					<Button type='submit' variant='outlined' color='primary'>
						Save
					</Button>
				</form>
			</Grid>
		</>
	);
}
