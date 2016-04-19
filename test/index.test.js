import passProps from '../index';

describe('pass-props', () => {
  it('ignores empty stuff', () => {
    passProps({}).should.eql({});
  });

  it('passes simple', () => {
    passProps({ id: 1 }, 'id').should.eql({ id: 1 });
  });

  it('ignores empty props', () => {
    passProps().should.eql({});
  });

  it('passes the specified items', () => {
    passProps({ id: 1, name: 'Jon Doe' }, 'id').should.eql({ id: 1 });
  });

  it('works with arrays', () => {
    passProps(
      {
        a: 1,
        b: 2,
        c: 3,
        d: 4,
        e: 5
      },
      ['a', ['b', 'c']],
      ['e']
    ).should.eql({
      a: 1,
      b: 2,
      c: 3,
      e: 5
    });
  });
});
