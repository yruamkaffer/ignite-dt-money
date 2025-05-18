import { MagnifyingGlass } from "phosphor-react";
import { SearhFormContainer } from "./styles"

export function SearchForm() {
    return (
        <SearhFormContainer>
            <input type="text" placeholder="Busque por transações" />

            <button type="submit">
                <MagnifyingGlass size={20} />
                Buscar
            </button>
        </SearhFormContainer>
    );
    }