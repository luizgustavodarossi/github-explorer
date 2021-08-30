import { RepositoryItem } from "./RepositoryItem";
import '../style/repositories.scss';


export function RepositoryList() {

    const repository = {
        name: 'unform',
        description: 'Form in React',
        link: 'https://github.com/unform/unform'
    };

    return (
        <section className="repository-list">
            <h1>Lista de Repositórios</h1>

            <ul>
                <RepositoryItem repository={repository} />
                <RepositoryItem />
                <RepositoryItem />
            </ul>
        </section>
    );
}