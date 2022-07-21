import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  AreaChart,
  Area,
  BarChart,
  Bar,
} from 'recharts'

const pdata = [
  {
    name: 'Python',
    student: 8,
    fees: 12,
    budget: 2,
  },
  {
    name: 'Javascript',
    student: 10,
    fees: 14,
    budget: 4,
  },
  {
    name: 'PHP',
    student: 8,
    fees: 12,
    budget: 2,
  },
  {
    name: 'Java',
    student: 10,
    fees: 14,
    budget: 4,
  },
  {
    name: 'C#',
    student: 8,
    fees: 12,
    budget: 2,
  },
  {
    name: 'C++',
    student: 10,
    fees: 14,
    budget: 4,
  },
  {
    name: 'Python',
    student: 8,
    fees: 12,
    budget: 2,
  },
  {
    name: 'Javascript',
    student: 10,
    fees: 14,
    budget: 4,
  },
  {
    name: 'PHP',
    student: 8,
    fees: 12,
    budget: 2,
  },
  {
    name: 'Java',
    student: 10,
    fees: 14,
    budget: 4,
  },
  {
    name: 'C#',
    student: 8,
    fees: 12,
    budget: 2,
  },
  {
    name: 'C++',
    student: 10,
    fees: 14,
    budget: 4,
  },
  {
    name: 'Python',
    student: 8,
    fees: 12,
    budget: 2,
  },
  {
    name: 'Javascript',
    student: 10,
    fees: 14,
    budget: 4,
  },
  {
    name: 'PHP',
    student: 8,
    fees: 12,
    budget: 2,
  },
  {
    name: 'Java',
    student: 10,
    fees: 14,
    budget: 4,
  },
  {
    name: 'C#',
    student: 8,
    fees: 12,
    budget: 2,
  },
  {
    name: 'C++',
    student: 10,
    fees: 14,
    budget: 4,
  },
]
export default function Graph() {
  return (
    <>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={pdata}
          //   width={500}
          //   height={300}
          //   margin={{ top: 5, right: 300, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3" />
          {/* <XAxis
            dataKey="name"
            interval={'preserveStartEnd'}
            tickFormatter={(value) => value + ' Programming'}
          /> */}
          {/* <YAxis /> */}
          {/* <Tooltip contentStyle={{ backgroundColor: 'yellow' }} /> */}
          {/* <Tooltip /> */}

          {/* <Legend /> */}
          <Line
            // type="monotone"
            dataKey="student"
            stroke="black"
            // activeDot={{ r: 8 }}
          />
          <Line
            // type="monotone"
            dataKey="fees"
            stroke="black"
            // activeDot={false}
            // activeDot={{ r: 8 }}
          />
          <Line
            // type="monotone"
            dataKey="budget"
            stroke="black"
            // activeDot={{ r: 8 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </>
  )
}
