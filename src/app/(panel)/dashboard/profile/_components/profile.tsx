"use client"
import { useProfileForm } from './profile.form'
import { Card, CardContent, CardDescription, CardHeader, CardTitle} from '@/components/ui/card'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {} from '@/components/ui/label'
import Image from 'next/image'
import ImageTest from '../../../../../../public/foto1.png'
import { Label } from '@radix-ui/react-label'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from '@/components/ui/button'
import { ArrowRight} from 'lucide-react'

export function ProfileContent(){

 const form = useProfileForm();

    return(
        <div className='mx-auto'>
           <Form {...form}>
             <form>
                <Card>
                    <CardHeader>
                        <CardTitle>Meu perfil</CardTitle>
                    </CardHeader>
                    <CardContent className='space-y-6'>
                        <div className='flex justify-center'>
                            <div className='bg-gray-200 relative h-40 w-40 rounded-full overflow-hidden'>
                                <Image
                                src={ImageTest}
                                alt='imagem da clinica'
                                fill
                                className='object-cover'
                                />
                            </div>
                        </div>

                        <div className='space-y-4'>
                            <FormField
                             control={form.control}
                             name="name"
                             render={({field}) => (
                                <FormItem>
                                    <FormLabel className='font-semibold'>Nome Completo</FormLabel>
                                    <FormControl>
                                        <Input 
                                        {...field} 
                                        placeholder='Digite o name da clínica...'
                                        />
                                    </FormControl>
                                    <FormMessage/>
                                </FormItem>
                             )}
                            />

                            <FormField
                             control={form.control}
                             name="address"
                             render={({field}) => (
                                <FormItem>
                                    <FormLabel className='font-semibold'>Endereço Completo:</FormLabel>
                                    <FormControl>
                                        <Input 
                                        {...field} 
                                        placeholder='Digite o endereço da clinica...'
                                        />
                                    </FormControl>
                                    <FormMessage/>
                                </FormItem>
                             )}
                            />

                            <FormField
                             control={form.control}
                             name="phone"
                             render={({field}) => (
                                <FormItem>
                                    <FormLabel className='font-semibold'>Telefone</FormLabel>
                                    <FormControl>
                                        <Input 
                                        {...field} 
                                        placeholder='Digite o telefone...'
                                        />
                                    </FormControl>
                                    <FormMessage/>
                                </FormItem>
                             )}
                            />
                            
                          <FormField
                             control={form.control}
                             name="status"
                             render={({field}) => (
                                <FormItem>
                                    <FormLabel className='font-semibold'>status da clinica</FormLabel>
                                    <FormControl>

                                        <Select onValueChange={field.onChange} defaultValue={field.value ? "active" : "inactive" }>
                                            <SelectTrigger>
                                                <SelectValue placeholder="Selecione o status da clinica"/>
                                            </SelectTrigger>
                                            <SelectContent>
                                               <SelectItem value='active'>Ativo (clinica aberta)</SelectItem>
                                               <SelectItem value='inacitve'>Inativo (clinica fechada)</SelectItem>
                                            </SelectContent>
                                        </Select>

                                    </FormControl>
                                </FormItem>
                             )}
                            />

                            <div className='space-y-2'> 
                                <Label className='font-semibold'>
                                    Configurar horários da clinica
                                </Label>
                                
                                <Dialog>
                                    <DialogTrigger asChild>
                                        <Button variant="outline" className='w-full'>
                                            Clique aqui para selecionar horários
                                            <ArrowRight className='w-5 h-5'/>
                                        </Button>
                                    </DialogTrigger>
                                </Dialog>


                            </div>


                        </div>
                    </CardContent>
                </Card>
             </form>
           </Form>
        </div>
    )
}