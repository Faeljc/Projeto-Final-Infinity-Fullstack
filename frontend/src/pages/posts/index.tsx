import { FormEvent, useState } from "react"
import Head from 'next/head'
import { Header } from '../../components/Header'
import styles from './styles.module.scss'
import { canSSRAuth } from '../../utils/canSSRAuth'


import { setupAPIClient } from "../../services/api"
import { toast } from 'react-toastify'

type UserProps = {
    id: string;
    name: string;
}

interface AuthorProps {
    users: UserProps;
}

export default function Post({ users }: AuthorProps) {
    console.log(users.id);

    const [title, setTitle] = useState('');
    const [caption, setCaption] = useState('');
    const [description, setDescription] = useState('');

    async function handleResgister(event: FormEvent) {
        event.preventDefault();
        try {
            if (title === '' || caption === '' || description === '') {
                toast.error("Preencha todos os campos!");
                return;
            }

            const apiClient = setupAPIClient();

            await apiClient.post('/post', {
                title: title,
                caption: caption,
                description: description,
                author_id: users.id
            });

            toast.success('Postagem cadastrada com sucesso!')

        } catch (error) {

            if (error.request) {
                console.log(error);
            }
            toast.error('Ops, erro ao cadastrar!')
        }

        setTitle('');
        setCaption('');
        setDescription('');

    }

    return (
        <>
            <Head>
                <title>Novo produto - Wayne</title>
            </Head>
            <div>
                <Header />
                <main className={styles.container}>
                    <div className={styles.alerts}>
                        <span>Aqui você pode:</span>
                        Cadastrar recursos internos, como
                        inventário de equipamentos, veículos e dispositivos de segurança.
                    </div>
                    <h1>Enviar novo produto</h1>
                    <form className={styles.form} onSubmit={handleResgister}>

                        <input
                            type="text"
                            placeholder='Digite o titulo do produto'
                            className={styles.input}
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                        <input
                            type="text"
                            placeholder='Subtítulo'
                            className={styles.input}
                            value={caption}
                            onChange={(e) => setCaption(e.target.value)}
                        />
                        <textarea
                            placeholder='Descreva sobre o produto'
                            className={styles.input}
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        />
                        <button className={styles.buttonAdd} type='submit'>
                            Cadastrar
                        </button>
                    </form>
                </main>
            </div>
        </>
    )
}

export const getServerSideProps = canSSRAuth(async (ctx) => {

    const apiClient = setupAPIClient(ctx);

    const response = await apiClient.get('/me');

    //console.log(response.data);

    return {
        props: {
            users: response.data
        }
    }
})