import { jsx as _jsx } from "react/jsx-runtime";
import { render, screen, fireEvent, waitFor } from '@testing-library/react'; // Importação correta e única
import Modal from './components/Modal/RegisterModal'; // Ajuste o caminho de importação se necessário
describe('Modal Component', () => {
    test('Não deve renderizar quando isOpen é falso', () => {
        render(_jsx(Modal, { isOpen: false, closeModal: jest.fn() }));
        expect(screen.queryByText(/Preencha os dados abaixo/)).not.toBeInTheDocument();
    });
    test('Deve renderizar o modal quando isOpen é verdadeiro', () => {
        render(_jsx(Modal, { isOpen: true, closeModal: jest.fn() }));
        expect(screen.getByText(/Preencha os dados abaixo/)).toBeInTheDocument();
    });
    test('Deve fechar o modal quando o botão de fechar for clicado', () => {
        const closeModal = jest.fn();
        render(_jsx(Modal, { isOpen: true, closeModal: closeModal }));
        const closeButton = screen.getByAltText('Fechar Modal');
        fireEvent.click(closeButton);
        expect(closeModal).toHaveBeenCalledTimes(1); // Verifica se a função foi chamada uma vez
    });
    test('Deve exibir mensagem de erro para campos obrigatórios quando o formulário for enviado sem dados', async () => {
        render(_jsx(Modal, { isOpen: true, closeModal: jest.fn() }));
        const submitButton = screen.getByRole('button', { name: /faça parte/i });
        fireEvent.click(submitButton);
        // Aguarda os erros serem exibidos
        await waitFor(() => {
            expect(screen.getByText('Nome é obrigatório')).toBeInTheDocument();
            expect(screen.getByText('E-mail é obrigatório')).toBeInTheDocument();
            expect(screen.getByText('Mensagem é obrigatória')).toBeInTheDocument();
        });
        // Verifica se o erro de cargo é exibido
        await waitFor(() => {
            expect(screen.getByText('Marque pelo menos um cargo')).toBeInTheDocument();
        });
    });
    test('Deve exibir mensagem de sucesso após o envio do formulário', async () => {
        render(_jsx(Modal, { isOpen: true, closeModal: jest.fn() }));
        // Preencher o formulário
        fireEvent.change(screen.getByLabelText(/nome/i), { target: { value: 'João' } });
        fireEvent.change(screen.getByLabelText(/e-mail/i), { target: { value: 'joao@example.com' } });
        fireEvent.change(screen.getByLabelText(/quais são suas habilidades\?/i), { target: { value: 'JavaScript, React' } });
        fireEvent.change(screen.getByLabelText(/nos conte mais sobre você/i), { target: { value: 'Tenho experiência com React' } });
        // Selecionar o cargo
        fireEvent.click(screen.getByLabelText(/Desenvolvedor Front-end/i));
        const submitButton = screen.getByRole('button', { name: /faça parte/i });
        fireEvent.click(submitButton);
        // Aguarda a mensagem de sucesso aparecer
        await waitFor(() => {
            expect(screen.getByText('Mensagem enviada com sucesso!')).toBeInTheDocument();
        });
    });
});
