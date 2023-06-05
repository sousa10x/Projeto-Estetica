Introdução
O sistema que será desenvolvido tem como finalidade fazer o gerenciamento de uma clínica de estética, ajudando e otimizado o trabalho diário. 
Software que só será usada pelos funcionários da clínica para marcar procedimentos estéticos controlar cadastros de clientes, e ter controle no fluxo de caixa.

Requisitos funcionais.
RF 01	O sistema deve dá acesso a página principal que terá as funcionalidades de CADASTROS, Poderá MARCAR CONSULTA, VER SERVIÇOS, fazer PAGAMENTO além de poder ter controle do CARRINHO.
RF 02	O sistema deve dar acesso a tela de CADASTROS onde os funcionários poderão cadastrar clientes com nome, CPF, Email, e telefone para contato.	
RF 03	Na página MARCAR CONSULTAS, o sistema deve mostrará as modalidades preços e especificações sobre os procedimentos estéticos.	
RF 04	Na página MARCAR CONSULTA ao clicar em uma das modalidades o funcionário será levado para uma aba que mostrará as datas disponíveis dos procedimentos estéticos escolhido e confirmar o pagamento depois de preencher os campos com o nome e CPF, ou enviar o procedimento estético para o carrinho para efetuar o pagamento depois.	
RF 05	O sistema deverá ter a funcionalidade de VER SERVIÇOS onde o funcionário poderá consultar através do CPF se o cliente tem serviços marcados, qual a modalidade do procedimento, a data o valor pago, e a situação do pagante, além de poder ir para tela de pagamento caso ele seja devedor.	
RF 06	O sistema deve dá acesso a forma de PAGAMENTOS que só será levada através das abas de MARCAR CONSULTAS, VER SERVIÇOS e CARRINHO, onde o funcionário terá o controle da forma de pagamento.	
RF 07	Na página de PAGAMENTOS será informado sobre o contrato do serviço a ser pago tal como, data, procedimento estético, valor, nome e CPF do cliente.	
RF 08	Na página CARRINHO o funcionário deverá ver os serviços escolhidos pelos clientes antes de efetua o pagamento caso escolha mais de um procedimento estético através do CPF, podendo também ser levado para página de pagamentos.	


Requisitos não funcionais.
RN 01	o sistema deverá ser desenvolvido para a plataforma web.
RN 02	O sistema deve ser implementado em HTML, CSS, JAVASCRIPT, MySQL e Node.js.	
RN 03	O sistema deve ser executado em qualquer sistema operacional e deverá ser responsivo.	
RN 04	O sistema será usado apenas por funcionários.	
RN 05	O sistema só terá disponibilidade no horário de trabalho.	
RN 06	Os usuários deverão operar o sistema após um determinado tempo de treinamento.
RN 07		

1. Página Principal.
 A página principal haverá botões que levam o usuário às páginas de CADASTROS, MARCAR CONSULTAS, VER SERVIÇOS que pode ser prestado, realizar PAGAMENTOS e ver CARRINHO.

2. Página de Cadastros.
 Pagina de cadastros com campos de texto, número e Email para preencher com dados dos clientes novos.

3. Página Marcar Consultas.
  Páginas para marcar consultas que mostrem os serviços que podem ser prestados com informações sobre valores, datas e especificações dos procedimentos estéticos.

4. Página Ver Consultas.
 Página onde o funcionário poderá verificar consultas marcadas, usando o CPF do cliente.
 
5. Páginas de Pagamentos.
 Pagina onde o funcionário poderá colocar a forma de pagamento escolhida pelo cliente.
 
6. Página Carrinho Página para verificar o carrinho com informações sobre os serviços marcados, usando o CPF do cliente podendo ser levado a página de pagamentos, e também efetuar o pagamento
