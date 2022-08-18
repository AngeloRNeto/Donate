'use strict';

const foundationRepository = require('../repositories/foundation-repository');
const ValidationContract = require('../validators/fluent-validator');

exports.post = async (req, res, next) => {
    let contract = new ValidationContract();
    contract.hasMinLen(req.body.title, 3, 'O título deve conter mais que 3 caracteres');

    //Se dados inválidos
    if (!contract.isValid()) {
        res.status(400).send(contract.errors()).end();
        return;
    }

    try {
        foundationRepository.create(req.body)
            .then((e) => {
                return res.status(201).send({ message: 'Fundação cadastrada com sucesso!' });
            })
            .catch((err) => {
                return res.status(500).send({ message: err });
            })
    }
    catch (e) {
        return res.status(500).send({ message: 'Falha ao processar sua requisição' });
    }
};

exports.getById = async (req, res, next) => {
    try {
        const data = await foundationRepository.getById(req.body.id);
        res.status(200).send(data);
    }
    catch (e) {
        res.status(500).send({
            message: 'Falha ao processar sua requisição'
        });
    }
};

exports.getByTitle = async (req, res, next) => {
    try {

        const data = await foundationRepository.getByTitle(req.params.title);
        res.status(200).send(data);
    } catch (e) {
        res.status(500).send({
            message: 'Falha ao processar sua requisição'
        });
    }



};

exports.getByTags = async (req, res, next) => {
    try {
        const data = await foundationRepository.getByTags(req.params.tag);
        res.status(200).send(data);
    } catch (e) {
        res.status(500).send({
            message: 'Falha ao processar sua requisição'
        });
    }

};


exports.put = async (req, res, next) => {
    try {
        await foundationRepository.update(req.params.id, req.bodyz);

        res.status(201).send({
            message: 'Produto atualizado com sucesso!'
        });
    } catch (e) {
        res.status(500).send({
            message: 'Falha ao processar sua requisição'
        });
    }
};


exports.delete = async (req, res, next) => {
    try {
        await foundationRepository.delete(req.body.id);
        res.status(201).send({
            message: 'Produto excluido com sucesso!'
        });
    } catch (e) {
        res.status(500).send({
            message: 'Falha ao processar sua requisição'
        });
    }

};