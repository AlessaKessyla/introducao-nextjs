import Toggle from "../../components/ThemeToggle";

export default function Page() {
  const now = new Date().toLocaleString(); // pega data/hora no servidor

    return (
    <main style={{ padding: 20 }}>
        <h1>Data/Hora do servidor:</h1>
        <p>{now}</p>
        <Toggle />
    </main>
    );
}