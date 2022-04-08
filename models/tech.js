module.exports = (sequelize, DataTypes) => {
  const Tech = sequelize.define(
    "Tech",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        comment: "고유번호 UUID",
      },
      name: {
        type: DataTypes.STRING(100),
        allowNull: false,
        unique: true,
        comment: "기술명",
      },
      description: {
        type: DataTypes.STRING(4000),
        allowNull: false,
        comment: "기술설명",
      },
      iconImg: {
        type: DataTypes.STRING(100),
        comment: "아이콘이미지",
      },
      link: {
        type: DataTypes.STRING(100),
        comment: "학습링크",
      },
    },
    {
      charset: "utf8", // 한국어 설정
      collate: "utf8_general_ci", // 한국어 설정
      tableName: "Tech", // 테이블 이름 정의
      timestamps: true, // createAt, updateAt 활성화
      paranoid: true, // deleteAt 옵션
    }
  );

  return Tech;
};
