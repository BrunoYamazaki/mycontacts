class ContactController {
  index(request, response) {
    // Listar todos os registros
    response.send('Send from Contact Controller');
  }

  show() {
    // Obter um registro
  }

  store() {
    // Criar um registro
  }

  update() {
    // Editar um registro
  }

  delete() {
    // Deletar um Registro
  }
}

// Singleton
module.exports = new ContactController();
