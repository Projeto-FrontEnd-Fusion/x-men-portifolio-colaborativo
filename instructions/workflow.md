# Fluxo de Trabalho com Git Flow e Padrões de Desenvolvimento

## Organização e Papéis
1. **Tech Leader**:
   - Responsável por gerenciar o backlog e criar as branchs de **feature** para o desenvolvimento.
   - Realiza a revisão do código (code review) e mescla as branchs ao finalizar uma feature.

2. **Desenvolvedor**:
   - Implementa apenas o que foi definido na tarefa e na branch correspondente.
   - Não pode mesclar branchs.
   - Deve seguir as diretrizes do projeto, garantindo o uso das tecnologias, estrutura e boas práticas definidas.
   - Não pode modificar ou renomear arquivos fora da sua branch ou escopo da tarefa.

---

## Regras para Versionamento e Git Flow
3. **Estrutura de Branchs**:
   - `main`: Branch de produção com código estável.
   - `develop`: Branch principal de desenvolvimento.
   - `feature/{nome-da-feature}`: Branchs criadas pelo Tech Leader para o desenvolvimento de novas funcionalidades.
   - `hotfix/{nome-do-hotfix}`: Branch para corrigir problemas emergenciais na produção.

4. **Commits Semânticos**:
   - Seguir os prefixos semânticos ao realizar commits:
     - **feat**: Para adição de uma nova funcionalidade.
     - **fix**: Para correção de bugs.
     - **refactor**: Para refatoração de código sem alterar funcionalidades.
     - **style**: Para alterações de estilo ou formatação que não afetam o funcionamento do código (e.g., espaços, identação).
     - **chore**: Para tarefas administrativas ou de configuração (e.g., atualização de dependências).
     - **test**: Para adição ou modificação de testes.
     - **docs**: Para alterações na documentação.

5. **Proibição de Alterações Fora do Escopo**:
   - Não modificar arquivos ou componentes que não estejam diretamente relacionados à tarefa.
   - Evitar refatorações ou melhorias fora da feature atribuída.

6. **Proibição de Mesclagem de Branchs**:
   - Apenas o Tech Leader pode realizar o merge das branchs após aprovação do código.

---

## Boas Práticas de Desenvolvimento
7. **Foco na Implementação Definida**:
   - Garanta que a tarefa seja implementada com base no escopo e nos requisitos definidos pelo Tech Leader ou pela equipe de produto.

8. **Código Limpo e Testado**:
   - Certifique-se de que o código esteja legível e bem documentado.
   - Teste localmente a funcionalidade antes de solicitar a revisão.

9. **Revisão de Código (Code Review)**:
   - Submeta o código para revisão antes de considerá-lo concluído.
   - Corrija os problemas apontados pelo Tech Leader ou outros revisores.

10. **Padronização de Arquivos e Nomes**:
    - Siga o padrão de nomenclatura definido no projeto para arquivos, componentes e variáveis.
    - Não renomeie arquivos ou pastas fora do escopo definido na tarefa.

11. **Documentação**:
    - Adicione comentários úteis onde necessário, explicando decisões de implementação.
    - Atualize a documentação do projeto (se necessário) para refletir as mudanças.

12. **Segurança e Qualidade**:
    - Evite a introdução de código vulnerável ou inadequado (e.g., console logs não tratados, informações sensíveis hardcoded).
    - Teste edge cases ao implementar novas funcionalidades.

13. **Uso de Ferramentas de Análise**:
    - Garanta que o código passe pelas ferramentas de análise automática configuradas no projeto (e.g., ESLint, Prettier, testes).

14. **Integração Contínua**:
    - Realize commits pequenos e frequentes para facilitar o acompanhamento e a resolução de conflitos.

15. **Atualização da Branch de Feature**:
    - Antes de solicitar a revisão, garanta que a branch de feature esteja atualizada com a branch `develop` para evitar conflitos futuros.

---

## Resumo do Fluxo de Desenvolvimento
1. **Receber a tarefa**: O Tech Leader cria a branch de feature com base no backlog.
2. **Implementar a feature**: O desenvolvedor realiza a implementação exclusivamente na branch atribuída.
3. **Realizar commits semânticos**: Utilize os prefixos semânticos para descrever mudanças.
4. **Garantir qualidade do código**: Realize testes locais e valide com as ferramentas configuradas.
5. **Submeter para revisão**: Solicite revisão do Tech Leader.
6. **Mesclagem pelo Tech Leader**: Após aprovação, o Tech Leader realiza o merge na branch principal.

