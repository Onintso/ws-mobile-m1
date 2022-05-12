const User = require('../models/user');
const jwt = require('jsonwebtoken');
const router = require('../routes/routes');
const bcrypt = require('bcrypt');
const mongoose = require('mongoose');

exports.addUser = async (req, res, next) => {
  delete req.body._id;
  const Users = new User({
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password, 10),
    name: req.body.name,
    lastname: req.body.lastname,
  });
  await Users.save()
    .then(() => res.status(201).json({ message: '---- User creer' }))
    .catch((error) => {
      res.status(400).json({ error });
    });
  next();
};

exports.verifyToken = (req, res) => {
  let bearerHeader = req.headers['authorization'];
  if (typeof bearerHeader !== 'undefined') {
    const bearer = bearerHeader.split(' ');
    bearerToken = bearer[1];
  }
  return bearerToken;
};

exports.getUser = async (req, res, next) => {
  let tokenDecoded = '';
  await jwt.verify(this.verifyToken(req, res), 'secretkey', (err, authData) => {
    if (err) {
      res.status(403).json(err);
    } else {
      res.status(200);
    }
    tokenDecoded = authData;
  });
  console.log('------ decoded ', tokenDecoded);
  if (tokenDecoded) {
    await User.find().then((response) => res.status(200).json(response));
  }
  next();
};

exports.getByRole = async (req, res, next) => {
  await jwt.verify(this.verifyToken(req, res), 'secretkey', (err, authData) => {
    if (err) {
      res.status(403).json(err);
      console.log(req.headers['authorization']);
    } else {
      res.status(200);
    }
    tokenDecoded = authData;
  });
  const id = req.params.role;
  console.log(id);
  const role = mongoose.Types.ObjectId(id);
  await User.find({ role: role })
    .then((users) => res.status(200).json({ data: users }))
    .catch((error) => res.status(404).json(error));
  next();
};

exports.getByIdUser = async (req, res, next) => {
  await jwt.verify(this.verifyToken(req, res), 'secretkey', (err, authData) => {
    if (err) {
      res.status(403).json(err);
      console.log(req.headers['authorization']);
    } else {
      res.status(200);
    }
    tokenDecoded = authData;
  });
  const id = req.params.id;
  console.log(id);
  const objectId = mongoose.Types.ObjectId(id);
  await User.find({ _id: objectId })
    .then((users) => res.status(200).json({ data: users }))
    .catch((error) => res.status(404).json(error));
  next();
};

exports.getToken = async (req, res, next) => {
  await jwt.verify(this.verifyToken(req, res), 'secretkey', (err, authData) => {
    if (err) {
      res.status(403).json(err);
      console.log(req.headers['authorization']);
    } else {
      res.status(200).json(authData);
    }
  });
  next();
};

exports.verify = async () => {
  tokenDecoded = '';
  await jwt.verify(this.verifyToken(req, res), 'secretkey', (err, authData) => {
    if (err) {
      res.status(403).json(err);
      console.log(req.headers['authorization']);
    } else {
      res.status(200);
    }
    tokenDecoded = authData;
  });
  return tokenDecoded;
};

exports.authentification = async (req, res, next) => {
  const email = req.body.email;
  const user = await User.findOne({ email });
  const val = bcrypt.compareSync(req.body.password, user.password);
  console.log(val);

  if (!user || !bcrypt.compareSync(req.body.password, user.password)) {
    res.status(401).json({ data: '---- User incorrect' });
  } else {
    const token = jwt.sign({ user: user }, 'secretkey', {
      expiresIn: '3600s',
    });
    res.status(200).json({
      data: {
        message: 'user valider',
        token,
      },
    });
  }
  next();
};
