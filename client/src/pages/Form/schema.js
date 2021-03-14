import * as yup from 'yup';

const schema = yup.object().shape({
	name: yup.string().required(),
	mobile: yup.number().required().typeError('mobile must be a number'),
	password: yup.string().required().min(10),
	select: yup.object().required(),
});

export default schema;
