//components
import DateChat from '../DateChat/dateChat';

//utils
import { groupByDate } from '../../utils/utils';
import { MessageDataType } from '../../types/dataTypes';

//types
type ChatListProps = {
  messageList: MessageDataType[];
};

export default function ChatList(props: ChatListProps) {
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
