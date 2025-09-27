export default function AdminHome() {
  return (
    <main style={{padding:40}}>
      <h1>Painel ADM — Método Network</h1>
      <p>Aqui você poderá gerenciar cursos, alunos, pagamentos e conteúdo.</p>
      <ul>
        <li><a href="/courses">Cursos</a></li>
        <li><a href="/users">Usuários</a></li>
      </ul>
    </main>
  )
}
