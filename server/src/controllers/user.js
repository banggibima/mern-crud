import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const index = async (req, res) => {
  try {
    const data = await prisma.user.findMany();
    res.status(200).json(data);
  } catch (err) {
    console.error(err);
  }
};

const create = async (req, res) => {
  const { first_name, last_name, email, username, mobile } = req.body;

  try {
    const data = await prisma.user.create({
      data: {
        first_name,
        last_name,
        email,
        username,
        mobile,
      },
    });
    res.status(201).json(data);
  } catch (err) {
    console.error(err);
  }
};

const show = async (req, res) => {
  const { id } = req.params;

  try {
    const data = await prisma.user.findUnique({
      where: {
        id,
      },
    });
    res.status(200).json(data);
  } catch (err) {
    console.error(err);
  }
};

const update = async (req, res) => {
  const { id } = req.params;
  const { first_name, last_name, email, username, mobile } = req.body;

  try {
    const data = await prisma.user.update({
      where: {
        id,
      },
      data: {
        first_name,
        last_name,
        email,
        username,
        mobile,
      },
    });
    res.status(201).json(data);
  } catch (err) {
    console.error(err);
  }
};

const destroy = async (req, res) => {
  const { id } = req.params;

  try {
    const data = await prisma.user.delete({
      where: {
        id,
      },
    });
    res.status(204).json(data);
  } catch (err) {
    console.error(err);
  }
};

export { index, create, show, update, destroy };
