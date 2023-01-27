import { Center, InputGroup, Input, IconButton } from '@chakra-ui/react'
import { RiArrowRightSLine } from 'react-icons/ri'

const SearchInput = () => {
	return (
		<Center>
			<InputGroup size='lg' width='35rem' pt='2rem'>
				<Input
					placeholder='Search for any IP address or domain'
					background='white'
					mr='-10px'
				/>
				<IconButton
					aria-label='Look up IP address'
					backgroundColor='black'
					icon={<RiArrowRightSLine size={23}/>}
					color='white'
					width='9%'
				></IconButton>
			</InputGroup>
		</Center>
	)
}

export default SearchInput
