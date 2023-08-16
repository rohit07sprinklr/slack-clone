import DateChat from '../DateChat/dateChat';
import { groupByDate } from '../../utils/utils';

export default function ChatList(props: { messageList: any }) {
  const groupedMessageList = groupByDate(props.messageList);

  return (
    <>
      {Object.keys(groupedMessageList).map((key: string, itr) => {
        return (
          <DateChat date={key} key={itr} chatList={groupedMessageList[key]} />
        );
      })}
    </>
  );
}
