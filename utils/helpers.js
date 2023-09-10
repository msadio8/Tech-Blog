module.exports = {
  format_date: (date) => {
    const dateInfo = new Date(date);
    const formattedDate = `${dateInfo.getMonth() + 1}/${dateInfo.getDate()}/${dateInfo.getFullYear}`;
    const hours = dateInfo.getHours().toString().padStart(2, '0');
    const minutes = dateInfo.getMinutes().toString().padStart(2,'0')
    const formattedTime =`${hours}:${minutes}`;
    return [formattedDate , formattedTime];
  },
};