// ATIVIDADE 03
import ThemeToggle from "@/components/ThemeToggle";

export default function ServerPage() {
    const dataHora = new Date().toLocaleString();

    return (
    <div>
    <h1>Data e hora do servidor:</h1>
    <p>{dataHora}</p>
    <ThemeToggle />
    </div>
    );
}