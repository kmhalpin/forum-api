class Reply {
  constructor(payload) {
    this._verifyPayload(payload);
    const {
      id,
      username,
      date,
      content,
      deleted,
      likeCount,
    } = payload;

    this.id = id;
    this.username = username;
    this.date = date;
    this.content = content;
    this.likeCount = likeCount;
    this.content = deleted ? '**balasan telah dihapus**' : content;
  }

  _verifyPayload({
    id,
    username,
    date,
    content,
    deleted,
    likeCount,
  }) {
    if (
      !id
      || !username
      || !date
      || !content
      || typeof deleted === 'undefined'
      || typeof likeCount === 'undefined'
    ) {
      throw new Error('REPLY.NOT_CONTAIN_NEEDED_PROPERTY');
    }

    if (
      typeof id !== 'string'
      || typeof username !== 'string'
      || !(date instanceof Date)
      || typeof content !== 'string'
      || typeof deleted !== 'boolean'
      || typeof likeCount !== 'number'
    ) {
      throw new Error('REPLY.NOT_MEET_DATA_TYPE_SPECIFICATION');
    }
  }
}

module.exports = Reply;
