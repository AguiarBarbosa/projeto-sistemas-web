
interface LastNameProps {
    lastName: string;
    onChange: (lastName:string) => void;
}
export const DataLastName = ({lastName, onChange}: LastNameProps) => { 
    return(
        <>
        <input
                      type="text"
                      name="lastname"
                      placeholder="Sobrenome"
                      value={lastName}
                      onChange={(e) => onChange?.(e.target.value)}
                      className={`p-2 border rounded-lg w-full focus:outline-none focus:outline-greenpersonal focus:bg-green-50 ${lastName ? 'bg-green-50' : ''}`}
                      required
                    />
        </>
    )
}