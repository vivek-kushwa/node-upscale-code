let data = [1, 2, 3, 4, 5];

exports.getData = (req, res) => {
  res.status(200).json({
    message: "data fetch Successfully",
    data,
  });
};

exports.postData = (req, res) => {
  const { dataArr } = req.body;

  data = dataArr;
  res.status(201).json({
    message: "data post Successfully",
    data,
  });
};
exports.deleteData = (req, res) => {
  data = [];
  res.status(200).json({
    message: "data delete Successfully",
  });
};
