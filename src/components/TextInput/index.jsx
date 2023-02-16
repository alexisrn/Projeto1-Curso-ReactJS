import './styles.css'

export const TextInput = ({searchValue, handleChange}) => {
    return(
        <input 
        className='textInput'
        value={searchValue}
        type='search'
        onChange={handleChange}
        placeholder='Type your Search'
        />
    )
}