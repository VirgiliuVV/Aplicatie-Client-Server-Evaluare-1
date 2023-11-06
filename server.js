import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();
const port = 3000;

const checkNumbers = (nr1, nr2) => {
    console.log(nr1)
    console.log(nr2)
    if (!nr1 && !nr2) {
        return { status: 400, message: 'Both inputs should be valid numbers' };
    }
    if (!nr1) {
        return { status: 400, message: 'First inputs should be valid numbers' };
    }
    if (!nr2) {
        return { status: 400, message: 'Second inputs should be valid numbers' };
    }
    return { status: 200, message: 'OK' };
}

app.use(bodyParser.json());
app.use(cors());

app.patch('/add', (req, res) => {
    const checker = checkNumbers(req.body.nr1, req.body.nr2);
    console.log(checker)
    if (checker.status !== 200) {
        res.status(checker.status).send({ message: checker.message });
    } else {
        res.status(200).send({ result: req.body.nr1 + req.body.nr2 + req.body.nr3});
    }
});

app.patch('/subtract', (req, res) => {
    const checker = checkNumbers(req.body.nr1, req.body.nr2);
    if (checker.status !== 200) {
        res.status(checker.status).send({ message: checker.message });
    } else {
        res.status(200).send({ result: req.body.nr1 - req.body.nr2 });
    }
});

app.patch('/multiply', (req, res) => {
    const checker = checkNumbers(req.body.nr1, req.body.nr2);
    if (checker.status !== 200) {
        res.status(checker.status).send({ message: checker.message });
    } else {
        res.status(200).send({ result: req.body.nr1 * req.body.nr2 });
    }
});

app.patch('/divide', (req, res) => {
    const checker = checkNumbers(req.body.nr1, req.body.nr2);
    if (checker.status !== 200) {
        res.status(checker.status).send({ message: checker.message });
    } else if (req.body.nr2 === 0) {
        res.status(400).send({ message: 'Division by zero is not allowed' });
    } else {
        res.status(200).send({ result: req.body.nr1 / req.body.nr2 });
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
