const trends = [
  {
    title: "10 Habits of Highly Effective Developers",
    author: "Carla Mendes",
  },
  {
    title: "Why TypeScript is Taking Over JavaScript",
    author: "Hugo Fernandes",
  },
  {
    title: "Design Systems: The Secret to Scalable UI",
    author: "Elena Rossi",
  },
];


const TrendList = () => {
  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <h3 className="font-semibold text-lg mb-4">📈 Today's top trends</h3>
      <ul className="space-y-4">
        {trends.map((trend, index) => (
          <li key={index} className="flex flex-col">
            <span className="font-medium">{trend.title}</span>
            <span className="text-sm text-gray-500">By {trend.author}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default TrendList