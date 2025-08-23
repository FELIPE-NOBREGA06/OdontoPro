export function formatPhone(value: string) {
  const cleanedValue = value.replace(/\D/g, '')

  if (cleanedValue.length > 11) {
    return cleanedValue.slice(0, 11) 
  }

  const formattedValue = cleanedValue
    .replace(/^(\d{2})(\d)/g, '($1) $2')  
    .replace(/(\d{4,5})(\d{4})$/, '$1-$2') 

  return formattedValue
}


export function extractPhoneNumber(phone: string){
    const phoneValeu = phone.replace(/[\(\)\s-]/g, "")
}