import { mysql, sqljs as createSqljs } from '../src/connection';
import { VoteEntity } from '../src/entity/VoteEntity';

function throwRequired(fieldName: string): never {
	throw new Error(`${fieldName} is required`);
}

async function createMysql() {
	const {
		DATABASE: database = 'catsvsdogs',
		HOST: host = 'localhost',
		PASSWORD: password = throwRequired('password'),
		PORT: port = '3339',
		USERNAME: username = throwRequired('username')
	} = process.env;

	return mysql({
		database,
		username,
		host,
		password,
		port: parseInt(port)
	});
}

(async function() {
	const con = await (process.env.TYPE === 'mysql' ? createMysql() : createSqljs());

	const votes = [
		new VoteEntity({
			choice: 'taco',
			voterId: '1'
		}),
		new VoteEntity({
			choice: 'burrito',
			voterId: '2'
		}),
		new VoteEntity({
			choice: 'taco',
			voterId: '3'
		})
	];

	const repo = con.getRepository(VoteEntity);
	for (let vote of votes) {
		await repo.save(vote);
	}

	const savedVotes = await repo.find();
	console.log(savedVotes);
	console.log('taco votes: ' + (await repo.count({ choice: 'taco' })));
	console.log('burrito votes: ' + (await repo.count({ choice: 'burrito' })));

	console.log(
		await repo
			.createQueryBuilder()
			.select('DISTINCT choice')
			.getRawMany()
	);

	con.close();
})();
